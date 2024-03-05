import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="flex gap-5 justify-between px-20 py-6 w-full text-amber-900">
            <div className="flex-auto self-start mt-2.5 text-3xl font-bold leading-9">
                Collers
            </div>
            <div className="flex gap-4 justify-between items-center text-base font-medium tracking-wide leading-6">
                <button className="grow self-stretch my-auto">Products</button>
                <button className="self-stretch my-auto">Solutions</button>
                <button className="self-stretch my-auto">Pricing</button>
                <button className="self-stretch my-auto">Resources</button>
                <button className="self-stretch my-auto">Log In</button>
                <button className="grow justify-center self-stretch px-7 py-3 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)]">
                    Sign up now
                </button>
            </div>
        </div>
    )
}

export default Navbar