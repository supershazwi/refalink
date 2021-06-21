import React, { useState, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'

const Header = (props) => {
    const stats = [
        { label: 'Founded', value: '2021' },
        { label: 'Employees', value: '5' },
        { label: 'Beta Users', value: '521' },
        { label: 'Raised', value: '$25M' },
    ]
    const logos = [
        { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
        { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
        { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
        { name: 'Laravel', url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
        { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
        { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
    ]
    const footerNavigation = {
        main: [
            { name: 'About', href: '#' }
        ],
        social: [
            {
                name: 'Twitter',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                ),
            },
        ],
    }

    return (
        <div className="bg-white">
            <main>
                {/* Hero section */}
                <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                        <div>
                            <div>
                                <h2 className="text-5xl font-extrabold tracking-tight text-gray-700">
                                    <img
                                        src="/logo.png"
                                        alt=""
                                        style={{ height: "48px", float: "left", marginRight: "0.5rem" }}
                                    /><strong>porodoro</strong>
                                </h2>
                            </div>
                            <div className="mt-20">
                                <div className="mt-6 sm:max-w-xl">
                                    <h1 className="text-4xl font-extrabold text-green-600 tracking-tight sm:text-5xl">
                                        Build a referral community to expand your recruitment funnel
                                    </h1>
                                    <p className="mt-6 text-xl text-gray-500">
                                        Reward users for referring the best candidates to your open job positions.
                                    </p>
                                </div>
                                <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="hero_email" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="hero_email"
                                            type="email"
                                            className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-3">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-green-500 text-base font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-10"
                                        >
                                            Keep me posted!
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <div className="hidden sm:block">
                                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                                <svg
                                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                                    width={404}
                                    height={392}
                                    fill="none"
                                    viewBox="0 0 404 392"
                                >
                                    <defs>
                                        <pattern
                                            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                                </svg>
                            </div>
                            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                                <img
                                    className="w-full rounded-md lg:h-full lg:w-auto lg:max-w-none"
                                    src="/header1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial/stats section */}
                <div className="relative mt-20">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                        <div className="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl lg:right-72" />
                                <svg
                                    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                    width={404}
                                    height={392}
                                    fill="none"
                                    viewBox="0 0 404 392"
                                >
                                    <defs>
                                        <pattern
                                            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                                </svg>
                            </div>
                            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                                {/* Testimonial card*/}
                                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-green-500 mix-blend-multiply" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-green-600 opacity-90" />
                                    <div className="relative px-8">
                                        <div>
                                            <img
                                                className="h-12"
                                                src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                                alt="Workcation"
                                            />
                                        </div>
                                        <blockquote className="mt-8">
                                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                                <svg
                                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-green-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 32 32"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p className="relative">
                                                    Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat,
                                                    diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                                                </p>
                                            </div>

                                            <footer className="mt-4">
                                                <p className="text-base font-semibold text-green-200">Sarah Williams, CEO at Workcation</p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            {/* Content area */}
                            <div className="pt-12 sm:pt-16 lg:pt-20">
                                <h2 className="text-3xl text-green-600 font-extrabold tracking-tight sm:text-4xl">
                                    Maintain a healthy list of leads
                                </h2>
                                <div className="mt-6 text-gray-500 space-y-6">
                                    <p className="text-lg">
                                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                                        tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
                                        morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
                                    </p>
                                    <p className="text-base leading-7">
                                        Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                                        pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin
                                        tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu
                                        vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                                    </p>
                                    <p className="text-base leading-7">
                                        Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                                        velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                                        egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                                    </p>
                                </div>
                            </div>

                            {/* Stats section */}
                            <div className="mt-10">
                                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                                            <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                                            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <div className="mt-10">
                                    <a href="#" className="text-base font-medium text-green-500">
                                        Learn more about how we're changing the world&nbsp&rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo cloud section */}
                <div className="mt-32">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold text-green-600 tracking-tight sm:text-4xl">
                                    Accelerate time to placement
                                </h2>
                                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                                    tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
                                    morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
                                </p>
                                <div className="mt-6">
                                    <a href="#" className="text-base font-medium text-green-500">
                                        Meet our investors and advisors&nbsp&rarr;
                                    </a>
                                </div>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                                {logos.map((logo) => (
                                    <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                        <img className="max-h-12" src={logo.url} alt={logo.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA section */}
                <div className="relative mt-24 sm:mt-32 sm:py-16">
                    <div aria-hidden="true" className="hidden sm:block">
                        <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
                        <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern
                                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                        </svg>
                    </div>
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="relative rounded-2xl px-6 py-10 bg-green-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 1463 360"
                                >
                                    <path
                                        className="text-green-400 text-opacity-40"
                                        fill="currentColor"
                                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                    />
                                    <path
                                        className="text-green-600 text-opacity-40"
                                        fill="currentColor"
                                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                    />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="sm:text-center">
                                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                        Get notified when we&rsquo;re launching.
                                    </h2>
                                    <p className="mt-6 mx-auto max-w-2xl text-lg text-green-100">
                                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                                        tristique pellentesque.
                                    </p>
                                </div>
                                <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="cta_email" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="cta_email"
                                            type="email"
                                            className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-3">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500 sm:px-10"
                                        >
                                            Keep me posted!
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer section */}
            <footer className="mt-24 bg-gray-900 sm:mt-12">
                <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                        {footerNavigation.main.map((item) => (
                            <div key={item.name} className="px-5 py-2">
                                <a href={item.href} className="text-base text-gray-400 hover:text-gray-300">
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </nav>
                    <div className="mt-8 flex justify-center space-x-6">
                        {footerNavigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Porodoro. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Header