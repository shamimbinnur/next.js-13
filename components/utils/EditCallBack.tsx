import Link from 'next/link'

interface EditCallBackProps {
  editUrl: string;
}

const EditCallBack: React.FC<EditCallBackProps> = ({
  editUrl
}) => {

  return (
    <Link target={editUrl} href={"ff"}>
      <div className="gap-2 p-3 text-xl w-8 whitespace-nowrap overflow-hidden transition-all duration-300 hover:w-52 flex font-medium cursor-pointer items-center text-blue-700">
        <span>✎</span>
        <span className="text-sm">Edit this component.</span>
      </div>
    </Link>
  )
}

export default EditCallBack