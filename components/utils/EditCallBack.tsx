import Link from 'next/link'

interface EditCallBackProps {
  path: string;
}

const EditCallBack: React.FC<EditCallBackProps> = ({
  path
}) => {
  const repoLink = "https://github.com/shamimbinnur/next.js-13"
  const branch = "main"

  return (
    <Link target="_blank" href={`${repoLink}/blob/${branch}/${path}`}>
      <div className="gap-2 py-3 text-xl no-underline w-5 whitespace-nowrap overflow-hidden transition-all duration-300 hover:w-40 flex font-medium cursor-pointer items-center text-blue-700">
        <span>✎</span>
        <span className="text-sm">Edit this component.</span>
      </div>
    </Link>
  )
}

export default EditCallBack