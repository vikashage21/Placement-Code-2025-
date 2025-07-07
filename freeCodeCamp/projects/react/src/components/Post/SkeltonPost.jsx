function SkeltonPost() {
    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <div className="animate-pulse space-y-4 border rounded-md p-4 bg-white">
                {/* Profile section */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </div>

                {/* Image placeholder */}
                <div className="w-full h-64 bg-gray-300 rounded-md"></div>

                {/* Caption text */}
                <div className="space-y-2">
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>

                {/* Comment input placeholder */}
                <div className="w-full h-10 bg-gray-200 rounded mt-4"></div>
            </div>
        </div>
    );
}

export default SkeltonPost;
