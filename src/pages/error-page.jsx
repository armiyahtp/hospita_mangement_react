import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fd] px-6">
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <span className="inline-block mb-3 text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                        ⚠️ Oops! Something went wrong
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        We couldn’t find that page.
                    </h1>
                    <p className="text-gray-600 mb-6">
                        {error?.statusText || error?.message || "An unexpected error has occurred."}
                    </p>
                    <Link to={"/"}>
                        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition">
                            Go to Homepage
                        </button>
                    </Link>

                </div>


                <div className="hidden md:block w-1/3">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3106/3106797.png"
                        alt="Error Illustration"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
