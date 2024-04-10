

const PostBlog = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-10">
            <div className="bg-base-200 p-10">
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Author Name'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Blog Title'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="date"
                            id="name"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Date'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="photoURL"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Photo URL'
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            rows="5"
                            required placeholder='Content'
                        ></textarea>
                    </div>
                    <button className='btn btn-success font-bold w-full rounded border-none uppercase'>Post Blog</button>
                </form>
            </div>
        </div>
    );
};

export default PostBlog;