import { useEffect, useState } from 'react';

type AwaitProps<T> = {
    promise: Promise<T>;
    resolver: (result: T) => JSX.Element | JSX.Element[] | null;
    fallback?: JSX.Element | JSX.Element[] | null;
};

export default function Await<T>({
    promise,
    resolver,
    fallback = <div>Loading...</div>,
}: Readonly<AwaitProps<T>>) {
    const [result, setResult] = useState<T | null>(null);

    useEffect(() => {
        promise.then(setResult);
    }, [promise]);

    return result ? resolver(result) : fallback;
}
