// General 
import React, { useContext } from 'react';
import Head from 'next/head'

// Components
import { Navbar, Menu, PageHeader} from "."
import { MaxpokeContext } from '../contexts';

interface WebsiteShellProps {
    head_title: string;
    head_description: string;
    page_title: string;
    children: React.ReactNode
}

interface InnerWebsiteShellProps {
    page_title: string;
    children: React.ReactNode
}

const DesktopWebsiteShell : React.FC<InnerWebsiteShellProps> = ({
    page_title,
    children
}) => (
        <div className="hidden lg:block">
            <Navbar />

            <div className="h-full grid grid-cols-6">
                <div className="col-span-1">
                    <Menu />
                </div>

                <div className="col-span-5 px-20 pt-10">
                    <PageHeader title={page_title} />
                    {children}
                </div>
            </div>
        </div>
)

const MobileWebsiteShell : React.FC<InnerWebsiteShellProps> = ({
    page_title,
    children
}) => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MaxpokeContext)
    return (
        <div className="block lg:hidden">
            <Navbar />

            <div className="h-full">
                {isMenuOpen 
                ?
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu />
                </div>
                : 
                <div className="mt-10 px-10">
                    <PageHeader title={page_title} />
                    {children}
                </div>
                }
            </div>
        </div>
    )
}

export const WebsiteShell : React.FC<WebsiteShellProps> = ({
    head_title,
    head_description,
    page_title,
    children,
    ...props
    }) => { 
        return (
            <div>
            {/* <div className="h-[100vh]"> */}
                <Head>
                    <title>{head_title}</title>
                    <meta name="description" content={head_description} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/* TODO(MC): Maybe refactor later using Object.assign() ? */}
                <DesktopWebsiteShell page_title={page_title} children={children} />
                <MobileWebsiteShell page_title={page_title} children={children} />
            </div>
        )
    }
   