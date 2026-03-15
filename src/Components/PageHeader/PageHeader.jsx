
function PageHeader({ title, description, className }) {
    return (
        <div className="space-y-2">
            <h1 className="text-[2rem] sm:text-[2.5rem] font-bold text-white">{title}</h1>
            <p className="text-gray-400">
                {description}
            </p>
            <hr className="text-purple-500 mt-5" />
        </div>
    )
}

export default PageHeader