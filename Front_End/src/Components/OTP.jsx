import { useEffect, useState } from "react";

export default function OTP() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    if (isLoading) {
      return (
        <>
          <div className="flex justify-center items-center h-screen">
    <div className="rounded-full h-20 w-20 bg-orange-700 animate-ping"></div>
  </div>
        </>
      );
    }
    return (
        <div className="relative flex w-full h-screen flex-col justify-center  bg-no-repeat bg-cover  bg-[url('./assets/BG.png')]">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email </p>
                        </div>
                    </div>

                    <div>
                        <form action="" method="post">
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-4">
                                    {[1, 2, 3, 4].map((_, index) => (
                                        <div key={index} className="w-16 h-16">
                                            <input
                                                className="w-full h-full flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-500 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-600"
                                                type="text"
                                                name={`digit-${index}`}
                                                id={`digit-${index}`}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-orange-600 border-none text-white text-sm shadow-sm"
                                        >
                                            Verify Account
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't receive code?</p>
                                        <a
                                            href="http://"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-row items-center text-orange-700"
                                        >
                                            Resend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
