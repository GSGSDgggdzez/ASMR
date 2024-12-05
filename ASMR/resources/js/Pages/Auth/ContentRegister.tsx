import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/Components/ui/button';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { HTMLAttributes } from 'react';

export default function ContentRegister(props: HTMLAttributes<HTMLDivElement>) {
    const [showForm, setShowForm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'));
    };
  return (
    <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                {!showForm ? (
                    <>
                        <Button className="w-full bg-transparent hover:bg-gray-50 border-2 border-gray-300 rounded-lg py-6 px-3  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src="/build/iii/google1.svg"
                                    alt="Logo"
                                    width={28}
                                    height={28}
                                    className="h-8 w-8 transition-transform group-hover:scale-110 duration-300"
                                    {...props}
                                />
                                <div className="text-black font-medium text-lg">Login With Google</div>
                            </div>
                        </Button>


                        <div className="transform transition-transform duration-300 hover:scale-105">
                            <Button
                                onClick={() => setShowForm(true)}
                                className="text-black py-2 my-2 block w-full text-center justify-center bg-white relative overflow-hidden group hover:text-white transition-colors duration-300 border-2 border-gray-300 hover:border-[#2958a3] text-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#2958a3] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <div className="relative flex items-center justify-center gap-4">
                                    <div className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className="font-semibold">Login With Email</div>
                                </div>
                            </Button>
                        </div>
                    </>

                ) : (
                    <>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <Link
                                href={route('login')}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </>
                )}
            </form>
        </GuestLayout>
  );
}
