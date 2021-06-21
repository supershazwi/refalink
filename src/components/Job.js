import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
    ArrowNarrowLeftIcon,
    CheckIcon,
    HomeIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    GiftIcon,
    ThumbUpIcon,
    UserIcon,
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const Job = (props) => {

    const user = {
        name: 'Whitney Francis',
        email: 'whitney@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    }
    const navigation = [
        { name: 'Dashboard', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Applicants', href: '#' },
        { name: 'Company', href: '#' },
    ]
    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ]
    const attachments = [
        { name: 'resume_front_end_developer.pdf', href: '#' },
        { name: 'coverletter_front_end_developer.pdf', href: '#' },
    ]
    const eventTypes = {
        applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
        advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-green-500' },
        completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
    }
    const timeline = [
        {
            id: 1,
            type: eventTypes.applied,
            content: 'Applied to',
            target: 'Front End Developer',
            date: 'Sep 20',
            datetime: '2020-09-20',
        },
        {
            id: 2,
            type: eventTypes.advanced,
            content: 'Advanced to phone screening by',
            target: 'Bethany Blake',
            date: 'Sep 22',
            datetime: '2020-09-22',
        },
        {
            id: 3,
            type: eventTypes.completed,
            content: 'Completed phone screening with',
            target: 'Martha Gardner',
            date: 'Sep 28',
            datetime: '2020-09-28',
        },
        {
            id: 4,
            type: eventTypes.advanced,
            content: 'Advanced to interview by',
            target: 'Bethany Blake',
            date: 'Sep 30',
            datetime: '2020-09-30',
        },
        {
            id: 5,
            type: eventTypes.completed,
            content: 'Completed interview with',
            target: 'Katherine Snyder',
            date: 'Oct 4',
            datetime: '2020-10-04',
        },
    ]
    const comments = [
        {
            id: 1,
            name: 'Michael Foster',
            date: '2d ago',
            imageId: '1519244703995-f4e0f30006d5',
            body:
                'How many positions are available for this role?',
        },
        {
            id: 2,
            name: 'Dries Vincent',
            date: '4d ago',
            imageId: '1506794778202-cad84cf45f1d',
            body:
                'What are the countries this role is expected to travel to?',
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <Popover className="flex justify-between h-16">
                        {({ open }) => (
                            <>
                                <div className="flex px-2 lg:px-0">
                                    <div className="flex-shrink-0 flex items-center">
                                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-700">
                                            <img
                                                src="/logo.png"
                                                alt=""
                                                style={{ height: "28px", float: "left", marginRight: "0.5rem" }}
                                            /><strong>porodoro</strong>
                                        </h2>
                                    </div>
                                    <nav aria-label="Global" className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                                        {navigation.map((item) => (
                                            <a key={item.name} href={item.href} className="px-3 py-2 text-gray-900 text-sm font-medium">
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                    <div className="max-w-lg w-full lg:max-w-xs">
                                        <label htmlFor="search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                                id="search"
                                                name="search"
                                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-600 focus:border-green-600 sm:text-sm"
                                                placeholder="Search"
                                                type="search"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center lg:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <Transition.Root show={open} as={Fragment}>
                                    <div className="lg:hidden">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="duration-150 ease-out"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="duration-150 ease-in"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Popover.Overlay
                                                static
                                                className="z-20 fixed inset-0 bg-black bg-opacity-25"
                                                aria-hidden="true"
                                            />
                                        </Transition.Child>

                                        <Transition.Child
                                            as={Fragment}
                                            enter="duration-150 ease-out"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="duration-150 ease-in"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Popover.Panel
                                                focus
                                                static
                                                className="z-30 absolute top-0 right-0 max-w-none w-full p-2 transition transform origin-top"
                                            >
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                                    <div className="pt-3 pb-2">
                                                        <div className="flex items-center justify-between px-4">
                                                            <div>
                                                                <img
                                                                    className="h-8 w-auto"
                                                                    src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg"
                                                                    alt="Workflow"
                                                                />
                                                            </div>
                                                            <div className="-mr-2">
                                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                                                    <span className="sr-only">Close menu</span>
                                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                                </Popover.Button>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3 px-2 space-y-1">
                                                            {navigation.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 pb-2">
                                                        <div className="flex items-center px-5">
                                                            <div className="flex-shrink-0">
                                                                <img className="h-10 w-10 rounded-md" src={user.imageUrl} alt="" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <div className="text-base font-medium text-gray-800">{user.name}</div>
                                                                <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                                            </div>
                                                            <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                                <span className="sr-only">View notifications</span>
                                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                        <div className="mt-3 px-2 space-y-1">
                                                            {userNavigation.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition.Child>
                                    </div>
                                </Transition.Root>
                                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                    <button
                                        type="button"
                                        className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                                        {({ open }) => (
                                            <>
                                                <div>
                                                    <Menu.Button className="bg-white rounded-md flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-md" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        static
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    >
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                            </>
                        )}
                    </Popover>
                </div>
            </header>

            <main className="py-10">
                {/* Page header */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                    <div className="flex items-center space-x-5">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Solutions Engineer, MoPub (Singapore)</h1>
                            <p className="text-sm font-medium text-gray-500">
                                Posted by{' '}
                                <a href="#" className="text-gray-900">
                                    Leslie Alexander
                                </a>{' '}
                                on <time dateTime="2020-08-25">May 31, 2021</time>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                        >
                            Save & Subscribe to Notifications
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500"
                        >
                            Apply
                        </button>
                    </div>
                </div>

                <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                        {/* Description list*/}
                        <section aria-labelledby="applicant-information-title">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <div className="flex">
                                        <div className="mr-4 flex-shrink-0">
                                            <img className="h-16 rounded-md" src="https://media-exp3.licdn.com/dms/image/C560BAQHRsTnqOuV4tA/company-logo_200_200/0/1622574251992?e=1632355200&v=beta&t=f6aU8FPOuPIVwClBq2ovHfiD5gp_9QtvGbQ-xeL00tg" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-900">Twitter</h2>
                                            <p className="text-sm font-medium text-gray-500">Singapore</p>
                                            <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded text-xs font-medium bg-green-100 text-green-800">
                                                21 applications
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Salary</dt>
                                            <dd className="mt-1 text-sm text-gray-900">$7,500 - $8,500 per month</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Employment Type</dt>
                                            <dd className="mt-1 text-sm text-gray-900">Full-time</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Industry</dt>
                                            <dd className="mt-1 text-sm text-gray-900">Internet</dd>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <dt className="text-sm font-medium text-gray-500">Overview</dt>
                                            <dd className="mt-1 text-sm text-gray-900">
                                                MoPub Professional Services Organization is a technical services organization that provides consulting and solutions to customers of the MoPub platform. We are looking for an ideal solutions engineer who collaborates deeply with the key clients to solve difficult problems, builds mobile SDK features to expand the publisher and partner base, leads mediation platform development, customizes solutions to achieve business objectives and provides technical consultation on various publisher products.
                                            </dd>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <dt className="text-sm font-medium text-gray-500">Job Overview</dt>
                                            <dd className="mt-1 text-sm text-gray-900">
                                                The solutions engineers will work closely with the commercial teams, Product Management, Engineering and Sales Teams and will actively contribute to the ongoing success of our products. You bring a proven track record of analytical problem-solving and the ability to absorb complex technical concepts and communicate them to technical and non-technical audiences alike. We work as a critical technical partner for mobile publishers and demand side platforms where your coding abilities, communication skills, desire to solve complex problems will all be leveraged to develop answers to integration and monetization strategy questions.
                                                <br /><br />
                                                As an ideal candidate, you should have:
                                                <ul className="list-disc ml-4">
                                                    <li>Experience with mobile technology stack and mobile industry best practices</li>
                                                    <li>Ability to code in one of iOS, Android, Unity languages</li>
                                                    <li>Understanding of web technologies</li>
                                                    <li>Solid communication and presentation skills</li>
                                                    <li>Willingness to travel approximately 20% of the time</li>
                                                    <li>Strong analytical skills, with proven ability to share insights that drive results and customer value</li>
                                                </ul>
                                            </dd>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <dt className="text-sm font-medium text-gray-500">Qualifications</dt>
                                            <dd className="mt-1 text-sm text-gray-900">
                                                <ul className="list-disc ml-4">
                                                    <li>BA/BS in Computer Science or equivalent degree with experience</li>
                                                    <li>Experience with programming skills like iOS ,Android and Unity development</li>
                                                    <li>At least 4 years of work experience at an Internet or mobile company with customer facing experience</li>
                                                </ul>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </section>

                        {/* Comments*/}
                        {/* <section aria-labelledby="notes-title">
                            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                                <div className="divide-y divide-gray-200">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                            Comments
                                        </h2>
                                    </div>
                                    <div className="px-4 py-6 sm:px-6">
                                        <ul className="space-y-8">
                                            {comments.map((comment) => (
                                                <li key={comment.id}>
                                                    <div className="flex space-x-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-md"
                                                                src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm">
                                                                <a href="#" className="font-medium text-gray-900">
                                                                    {comment.name}
                                                                </a>
                                                            </div>
                                                            <div className="mt-1 text-sm text-gray-700">
                                                                <p>{comment.body}</p>
                                                            </div>
                                                            <div className="mt-2 text-sm space-x-2">
                                                                <span className="text-gray-500 font-medium">{comment.date}</span>{' '}
                                                                <span className="text-gray-500 font-medium">&middot;</span>{' '}
                                                                <button type="button" className="text-gray-900 font-medium">
                                                                    Reply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                                    <div className="flex space-x-3">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-md" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <form action="#">
                                                <div>
                                                    <label htmlFor="comment" className="sr-only">
                                                        About
                                                    </label>
                                                    <textarea
                                                        id="comment"
                                                        name="comment"
                                                        rows={3}
                                                        className="shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border border-gray-300 rounded-md"
                                                        placeholder="Write a comment"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Comment
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                    </div>

                    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                                <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                                    <div className="ml-4 mt-2">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Bounty</h3>
                                    </div>
                                    <div className="ml-4 mt-2 flex-shrink-0">
                                        <h2 className="text-lg font-bold text-green-700">$1,500</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                                <div className="divide-y divide-gray-200">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                            Poster
                                        </h2>
                                    </div>
                                    <div className="px-4 py-6 sm:px-6">
                                        <div className="flex">
                                            <div className="mr-4 flex-shrink-0">
                                                <img className="h-16 rounded-md" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
                                            </div>
                                            <div>
                                                <h2 className="text-lg font-medium text-gray-900">Leslie Alexander</h2>
                                                <p className="text-sm font-medium text-gray-500">Recruiter | AMC Consulting Pte. Ltd.</p>
                                                <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded text-xs font-medium bg-green-100 text-green-800">
                                                    150 <ThumbUpIcon className="ml-1 h-4 w-4 text-green-700" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex mt-3">
                                            <button
                                                type="button"
                                                className="inline-flex w-full items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                                            >
                                                Direct Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                                <div className="divide-y divide-gray-200">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                            Referral Link
                                        </h2>
                                    </div>
                                    <div className="px-4 py-6 sm:px-6">
                                        <div className="flex rounded-md shadow-sm">
                                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="focus:ring-green-500 focus:border-green-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                                                    value="https://porodoro.com/link/2490u2o3ir23j?ref=shazwisuwandi"
                                                />
                                            </div>
                                            <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
                                                <span>Copy Link</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Job