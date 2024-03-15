const Success = () => {
    return (
        <div className='py-8 px-2 '>
            <div className='flex justify-center p-4'>
                <img
                    src='/icon-thank-you.svg'
                    alt='success icon'
                    className='w-16 md:w-24'
                />
            </div>
            <h2 className='text-marine text-center font-bold text-xl md:text-3xl'>
                Thank you!
            </h2>
            <p className='text-center text-coolGray mt-3'>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    );
};

export default Success;
