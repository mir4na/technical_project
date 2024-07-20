import React from "react";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-300">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 login-box">
            <h1 className="text-4xl font-bold mb-6 text-center text-violet-900">Create an account</h1>
            <p className="mb-4 text-center text-violet-800">Fill in the information below to create your account.</p>
            <form className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                type="text"
                id="username"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="your username"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
                />
            </div>
            <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
                />
            </div>
            <div className="flex items-center">
                <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I agree to the terms and conditions</label>
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Create account
            </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account? <a href=".." className="font-medium text-indigo-600 hover:text-indigo-500">Log in here</a>
            </p>
        </div>
        </main>
    );
}