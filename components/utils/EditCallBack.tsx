import Link from 'next/link'

interface EditCallBackProps {
  path: string;
}

const EditCallBack: React.FC<EditCallBackProps> = ({
  path
}) => {
  const repoLink = "https://github.com/shamimbinnur/next.js-13"
  const branch = "main"
  const modifiedPath = path.replaceAll("[", "%5B").replaceAll("]", "%5D");

  
  return (
    <Link target="_blank" href={`${repoLink}/blob/${branch}/${modifiedPath}`}>
      <div className="gap-2 py-3 text-md md:text-xl no-underline md:w-5 whitespace-nowrap overflow-hidden transition-all duration-300 md:hover:w-40 flex font-medium cursor-pointer items-center text-blue-700">
        <span>✎</span>
        <span className="text-sm">Edit this component.</span>
      </div>
    </Link>
  )
}

export default EditCallBack