import { Button, Modal } from 'antd'
import './App.css'
import 'nes.css/css/nes.min.css'
import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className='container'>

      <div>
        <span className="nes-text is-primary">Primary</span>
        <span className="nes-text is-success">Success</span>
        <span className="nes-text is-warning">Warning</span>
        <span className="nes-text is-error">Error</span>
        <span className="nes-text is-disabled">Disabled</span>
      </div>
      <br />
      <div>
        <a className="nes-btn" href="#">Normal</a>
        <button
          type="button"
          className="nes-btn is-primary">
          Primary
        </button>
        <button type="button" className="nes-btn is-success">Success</button>
        <button type="button" className="nes-btn is-warning">Warning</button>
        <button type="button" className="nes-btn is-error">Error</button>
        <button type="button" className="nes-btn is-disabled">Disabled</button>
      </div>

      <br />
      <Button
        className='nes-btn is-primary'
        // style={{
        //   display: 'flex',
        //   alignItems: 'center',
        // }}
        onClick={() => setVisible(!visible)}
      >
        Antd Btn
      </Button>

      <Button id='custom-button'>Antd Btn</Button>
      <Button>Antd Btn</Button>

      <section>
  <dialog className="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
    <form method="dialog">
      <p className="title">Dark and Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu className="dialog-menu">
        <button className="nes-btn">Cancel</button>
        <button className="nes-btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

      <Modal
        open={visible}
        onCancel={() => setVisible(!visible)}
        width={'60%'}
        footer={null}
        className='custom-modal nes-dialog is-rounded is-dark'
      >
        <div
          style={{
            minHeight: '60vh',
          }}
          
        >
          Test
        </div>
      </Modal>

    </div>
  )
}

export default App
