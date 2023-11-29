import React, { useState, useRef } from 'react';

const TooltipEditorComp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<Range | null>(null);
  const [urlInput, setUrlInput] = useState<string>('');
  const styleMap: Record<string, string> = {
    bold: 'font-weight: bold;',
    italic: 'font-style: italic;',
    underline: 'text-decoration: underline;',
  };
  const colorInputRef = useRef<HTMLInputElement | null>(null);

  const applyStyle = (style: string) => {
    if (selectedRange) {
      const span = document.createElement('span');
      span.style.cssText = styleMap[style];
      span.appendChild(document.createTextNode(selectedRange.toString()));
      selectedRange.deleteContents();
      selectedRange.insertNode(span);
    }
  };

  const handleBoldClick = () => applyStyle('bold');
  const handleItalicClick = () => applyStyle('italic');
  const handleUnderlineClick = () => applyStyle('underline');

  const handleAttachURL = () => {
    if (selectedRange && urlInput) {
      const url = urlInput.trim();
      if (url) {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.textContent = selectedRange.toString();
        selectedRange.deleteContents();
        selectedRange.insertNode(anchor);
      }
    }
    setUrlInput('');
    setShowTooltip(false);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      setSelectedRange(range);
      setShowTooltip(true);

      // Calculate the tooltip position based on the mouse event, and set it to show near the selected text.
      const tooltip = document.getElementById('tooltip');
      if (tooltip) {
        tooltip.style.top = e.clientY + 'px';
        tooltip.style.left = e.clientX + 'px';
      }
    } else {
      setSelectedRange(null);
      setShowTooltip(false);
    }
  };

  return (
    <div>
      <div
        id="editor"
        onMouseUp={handleMouseUp}
        contentEditable
        style={{ border: '1px solid #000', padding: '10px' }}
      >
        Select some text in this editor and apply formatting or attach a URL.
      </div>

      {showTooltip && (
        <div id="tooltip">
          <button onClick={handleBoldClick}>Bold</button>
          <button onClick={handleItalicClick}>Italic</button>
          <button onClick={handleUnderlineClick}>Underline</button>
          <input type="text" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="URL" />
          <button onClick={handleAttachURL}>Attach URL</button>
        </div>
      )}
    </div>
  );
};

export default TooltipEditorComp;
