import { useRouter } from "next/router";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { Button, Space } from "antd";
import Link from "next/link";

type paramTypes = {
  id: string;
};

type queryTypes = {
  item: string;
};

type Props = {
  params: paramTypes;
  searchParams: queryTypes;
};

const DirectoryById = (props: Props) => {
  const { params, searchParams } = props;
  // const navigate = useRouter()
  // const pathName = usePathname()
  // console.log('pathName', pathName)
  
  return (
    <div>
      <Link href='/directory'>
        <Button
          type='link'
          // onClick={() => navigate('/')}
        >
          Backward
        </Button>
      </Link>
      <Space direction="vertical">
        <div>DirectoryById</div>
        <div>Params: {params.id}</div>
        <div>Query: {searchParams.item}</div>
      </Space>
    </div>
  );
};

export default DirectoryById;
