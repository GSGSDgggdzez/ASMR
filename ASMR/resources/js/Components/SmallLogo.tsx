import { HTMLAttributes } from 'react';

export default function ApplicationLogo(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="flex items-center gap-1"> {/* Flexbox for horizontal alignment */}
        <div>
            <img
                src="/build/iii/logo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                {...props}
            />
        </div>
    </div>
    );
}
