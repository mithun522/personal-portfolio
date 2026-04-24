import React from 'react';
import { FaCode, FaEye, FaGithub } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

interface MilestonesProps {
    milestoneRef: React.RefObject<HTMLDivElement>;
}

const openSourceContributions = [
    {
        name: 'Material UI',
        description: 'Fixed button hover text visibility issue.',
        url: 'https://github.com/mui/material-ui/pull/41902',
    },
    {
        name: 'PrimeNg',
        description: 'Fixed an issue with comments.',
        url: 'https://github.com/primefaces/primeng/pull/15136',
    },
    {
        name: 'Jhipster',
        description: 'Fixed a language issue.',
        url: 'https://github.com/jhipster/generator-jhipster/pull/26772',
    },
];

const Milestones: React.FC<MilestonesProps> = ({ milestoneRef }) => {
    return (
        <section id="milestones" ref={milestoneRef} className="px-6 py-16 text-black md:px-10 md:py-24">
            <div className="mx-auto max-w-6xl">
            <h1 className="mb-8 text-center font-serif text-4xl font-semibold text-slate-950 md:text-5xl">Milestones</h1>
            <div className="mx-auto space-y-8 lg:max-w-[1000px]">
                {/* DSA Problems Solved */}
                <div className="mx-auto w-full rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center">
                        <FaCode className="mr-3" size={30} />
                        DSA Problems Solved
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2 bg-yellow-200 p-4 rounded-full">
                                <SiLeetcode size={25} color="black" />
                                <p className="text-lg font-semibold">LeetCode</p>
                            </div>
                            <div className="flex space-x-2">
                                <div className="bg-green-50 p-2 rounded-full text-center">
                                    <p className="text-lg font-semibold">30</p>
                                    <p className="text-xs w-12">Easy</p>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded-full text-center">
                                    <p className="text-lg font-semibold">30</p>
                                    <p className="text-xs w-12">Medium</p>
                                </div>
                                <div className="bg-red-50 p-2 rounded-full text-center">
                                    <p className="text-lg font-semibold">10</p>
                                    <p className="text-xs w-12">Hard</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2 bg-green-200 p-4 rounded-full">
                                <SiGeeksforgeeks size={25} color="black" />
                                <p className="text-lg font-semibold">GeeksForGeeks</p>
                            </div>
                            <div className="flex space-x-2">
                                <div className="bg-green-50 p-2 rounded-full text-center">
                                    <p className="text-lg font-semibold">40</p>
                                    <p className="text-xs w-12">Easy</p>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded-full text-center">
                                    <p className="text-lg font-semibold">25</p>
                                    <p className="text-xs w-12">Medium</p>
                                </div>
                                <div className="bg-red-50 p-2 rounded-full text-center">
                                    <p className="text-lg font-semibold">10</p>
                                    <p className="text-xs w-12">Hard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Open Source Contributions */}
                <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center">
                        <FaGithub className="mr-3" size={30} />
                        Open Source Contributions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {openSourceContributions.map((contribution, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                                    <span>{contribution.name}</span>
                                    <a
                                        href={contribution.url}
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaEye size={20} />
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-500">{contribution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Milestones;
