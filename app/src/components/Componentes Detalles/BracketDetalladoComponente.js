import React, { useRef } from 'react';

const BracketDetalladoComponente = () => {
    const containerRef = useRef(null);
    let isDragging = false;
    let startX, startY;
    let scrollLeft, scrollTop;

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - containerRef.current.offsetLeft;
        startY = e.pageY - containerRef.current.offsetTop;
        scrollLeft = containerRef.current.scrollLeft;
        scrollTop = containerRef.current.scrollTop;
        containerRef.current.style.cursor = "grabbing";
        document.body.style.userSelect = "none"; // Prevent text selection
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const y = e.pageY - containerRef.current.offsetTop;
        const walkX = (x - startX) * 2; // Adjust horizontal movement speed
        const walkY = (y - startY) * 2; // Adjust vertical movement speed
        containerRef.current.scrollLeft = scrollLeft - walkX;
        containerRef.current.scrollTop = scrollTop - walkY;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
        containerRef.current.style.cursor = "grab";
        document.body.style.userSelect = ""; // Re-enable text selection
    };

    const rounds = [
        { title: "Ronda de 64", matches: 32, positions: [
            { top: '0rem', left: '0rem' }, { top: '4rem', left: '0rem' },
            { top: '8rem', left: '0rem' }, { top: '12rem', left: '0rem' },
            { top: '16rem', left: '0rem' }, { top: '20rem', left: '0rem' },
            { top: '24rem', left: '0rem' }, { top: '28rem', left: '0rem' },
            { top: '32rem', left: '0rem' }, { top: '36rem', left: '0rem' },
            { top: '40rem', left: '0rem' }, { top: '44rem', left: '0rem' },
            { top: '48rem', left: '0rem' }, { top: '52rem', left: '0rem' },
            { top: '56rem', left: '0rem' }, { top: '60rem', left: '0rem' }
        ] },
        { title: "Ronda de 32", matches: 16, positions: [
            { top: '5rem', left: '1rem' }, { top: '19rem', left: '1rem' },
            { top: '33rem', left: '1rem' }, { top: '47rem', left: '1rem' },
            { top: '61rem', left: '1rem' }, { top: '75rem', left: '1rem' },
            { top: '89rem', left: '1rem' }, { top: '103rem', left: '1rem' }
        ] },
        { title: "Ronda de 16", matches: 8, positions: [
            { top: '15rem', left: '2rem' }, { top: '49rem', left: '2rem' },
            { top: '83rem', left: '2rem' }, { top: '117rem', left: '2rem' }
        ] },
        { title: "Cuartos de final", matches: 4, positions: [
            { top: '35rem', left: '3rem' }, { top: '109rem', left: '3rem' }
        ] },
        { title: "Semifinales", matches: 2, positions: [
            { top: '76rem', left: '4rem' }
        ] },
        { title: "Final", matches: 1, positions: [
            { top: '85rem', left: '5rem' }
        ] },
        { title: "Semifinales ", matches: 2, positions: [
            { top: '76rem', left: '6rem' } // Nueva posición ajustada
        ] },
    ];

    const pages = [
        [rounds[0], rounds[1], rounds[2], rounds[3]],
        [rounds[4], rounds[5], rounds[6]], // Se incluye la nueva columna de semifinal
        [rounds[3], rounds[2], rounds[1], rounds[0]],
    ];

    return (
        <div
            ref={containerRef}
            className="bg-[#0b1120] text-white p-6 overflow-hidden cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
        >
            <div className="flex justify-between items-start space-x-8">
                {pages.flat().map((round, roundIndex) => (
                    <div key={roundIndex} className="flex flex-col items-center space-y-4">
                        <h3 className="text-lg font-bold mb-4">{round.title}</h3>
                        <div className="flex flex-col space-y-4">
                            {round.positions.map((position, matchIndex) => (
                                <div
                                    key={matchIndex}
                                    className="relative text-white w-48"
                                    style={{ top: position.top, left: position.left }}
                                >
                                    {/* Match Title */}
                                    <div className="text-left text-sm font-bold mb-2">
                                        Partida {matchIndex + 1}
                                    </div>
                                    {/* Match Details */}
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex justify-between items-center bg-[#1e293b] p-2 rounded-md">
                                            <p className="text-sm font-bold flex items-center">
                                                <span className="mr-2">👥</span> Por decidir
                                            </p>
                                            <p className="text-sm">0</p>
                                        </div>
                                        <div className="flex justify-between items-center bg-[#1e293b] p-2 rounded-md">
                                            <p className="text-sm font-bold flex items-center">
                                                <span className="mr-2">👥</span> Por decidir
                                            </p>
                                            <p className="text-sm">0</p>
                                        </div>
                                    </div>
                                    {/* Connector */}
                                    {roundIndex < pages.flat().length - 1 && (
                                        <div className="absolute right-0 top-1/2 transform translate-x-[50%] translate-y-[-50%] w-10 h-20 border-t-2 border-r-2 border-gray-500"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BracketDetalladoComponente;