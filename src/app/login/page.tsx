"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "@/lib/actions";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 md:w-120">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-gray-700 mb-6">Please sign in to your account</p>
        <form action={formAction}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          {errorMessage && (
            <div
              className="flex h-4 py-4 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
          <div className="flex items-center justify-between">
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              aria-disabled={isPending}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export function LoginPage1() {
//   return (
//     <form action={formAction} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-200 px-6 py-4">
//         <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-700"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//               <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-700"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <input type="hidden" name="redirectTo" value={callbackUrl} />
//         <Button className="mt-4 w-full" aria-disabled={isPending} type="submit">
//           Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//         </Button>

//         {errorMessage && (
//           <div
//             className="flex h-8 items-end space-x-1"
//             aria-live="polite"
//             aria-atomic="true"
//           >
//             <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//             <p className="text-sm text-red-500">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }
