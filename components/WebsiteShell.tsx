// General 
import React from 'react';
import Head from 'next/head'

// Components
import { Navbar, Menu, PageHeader} from "."

export interface WebsiteShellProps {
    head_title: string;
    head_description: string;
    page_title: string;
    children: React.ReactNode
}

export const WebsiteShell : React.FC<WebsiteShellProps> = ({
    head_title,
    head_description,
    page_title,
    children, 
    }) => (
        <div className="h-[100vh]">
            <Head>
                <title>{head_title}</title>
                <meta name="description" content={head_description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
   