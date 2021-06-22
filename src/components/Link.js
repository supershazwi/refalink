import React, { Fragment } from 'react'

const Link = (props) => {

    return (
        <div className="max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-3xl mx-auto">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <form className="space-y-8 divide-y divide-gray-200">
                            <div className="space-y-8 divide-y divide-gray-200">
                                <div>
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Create a referral exchange</h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            By creating a referral exchange, other users are able to generate their own referral links that redirect to your product.
                                        </p>
                                    </div>

                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                                Destination url
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    className="flex-1 focus:ring-green-400 focus:border-green-400 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                                                    value="https://gumroad.com/jakepoll#taAzL"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Content of destination url
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-green-400 focus:border-green-400 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    defaultValue={'In this course, I teach on the steps I took to grow my TikTok followers from 500 at the start of 2020 to 1,000,000 by mid 2021. TikTok works differently from other platforms like Twitter and Instagram and it can be quite challenging to a beginner. '}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">Write a few sentences on what users are expected to see when they reach the destination url.</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Incentives</h3>
                                        <p className="mt-1 text-sm text-gray-500">Determine what's in it for partners to refer traffic and potential buyers to your destination url.</p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                                Reward
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-green-400 focus:border-green-400 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    defaultValue={'15% of purchase price.'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Access to create referral link</h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Control who becomes your partner.
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <fieldset>
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push_everything"
                                                        name="push_notifications"
                                                        type="radio"
                                                        className="focus:ring-green-400 h-4 w-4 text-green-500 border-gray-300"
                                                    />
                                                    <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Everyone
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push_email"
                                                        name="push_notifications"
                                                        type="radio"
                                                        className="focus:ring-green-400 h-4 w-4 text-green-500 border-gray-300"
                                                    />
                                                    <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Restricted - Only approved users can become partners
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
                        Create referral exchange
                      </button>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Link