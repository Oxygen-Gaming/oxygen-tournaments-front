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

    // Utility function to generate lines
    const generateLine = (styles) => (
        <div className={`absolute ${styles}`} />
    );

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
            { top: '7rem', left: '1rem' }, { top: '23rem', left: '1rem' },
            { top: '38rem', left: '1rem' }, { top: '54rem', left: '1rem' },
            { top: '70rem', left: '1rem' }, { top: '85rem', left: '1rem' },
            { top: '101rem', left: '1rem' }, { top: '117rem', left: '1rem' }
        ] },
        { title: "Ronda de 16", matches: 8, positions: [
            { top: '19rem', left: '2rem' }, { top: '58rem', left: '2rem' },
            { top: '97rem', left: '2rem' }, { top: '136rem', left: '2rem' }
        ] },
        { title: "Cuartos de final", matches: 4, positions: [
            { top: '42rem', left: '3rem' }, { top: '128rem', left: '3rem' }
        ] },
        { title: "Semifinales", matches: 2, positions: [
            { top: '85rem', left: '4rem' }
        ] },
        { title: "Final", matches: 1, positions: [
            { top: '85rem', left: '5rem' }
        ] },
        { title: "Semifinales ", matches: 2, positions: [
            { top: '85rem', left: '6rem' } // Nueva posición ajustada
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
                            {round.positions.map((position, matchIndex) => {
                                const lineTopOffset = 60; // Percentage offset for line starting position
                                const lineHeight = 20; // Height of the connector line
                                return (
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

                                      

                                        {/* Section for Ronda de 32 */}
                                        {round.title === "Ronda de 32" && (
                                            <div>
                                            {generateLine("left-[-1rem] top-[62%] w-[1rem] h-[1px] bg-white")} {/* Horizontal line */}
                                            {generateLine("left-[-1rem] top-[50%] w-[1px] h-[5rem] bg-white")} {/* Vertical line */}
                                            {generateLine("left-[-1rem] bottom-[50%] w-[1px] h-[6rem] bg-white")} {/* Vertical line */}
                                            {generateLine("left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[3rem] bg-white")} {/* Additional vertical line */}
                                            {generateLine("left-[-2rem] top-[calc(50%+6rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                            {generateLine("left-[-2rem] bottom-[calc(50%+6rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                        </div>
                                        )}

                                        {/* Section for Ronda de 16 */}
                                        {round.title === "Ronda de 16" && (
                                           <div>
                                           {generateLine("left-[-1rem] top-[62%] w-[1rem] h-[1px] bg-white")} {/* Horizontal line */}
                                           {generateLine("left-[-1rem] top-[50%] w-[1px] h-[13rem] bg-white")} {/* Vertical line */}
                                           {generateLine("left-[-1rem] bottom-[50%] w-[1px] h-[11rem] bg-white")} {/* Vertical line */}
                                           {generateLine("left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[3rem] bg-white")} {/* Additional vertical line */}
                                           {generateLine("left-[-2rem] top-[calc(50%+13rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                           {generateLine("left-[-2rem] bottom-[calc(50%+11rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                       </div>
                                        )}

                                        {/* Section for Cuartos de final */}
                                        {round.title === "Cuartos de final" && (
                                            <div>
                                            {generateLine("left-[-1rem] top-[62%] w-[1rem] h-[1px] bg-white")} {/* Horizontal line */}
                                            {generateLine("left-[-1rem] top-[50%] w-[1px] h-[25rem] bg-white")} {/* Vertical line */}
                                            {generateLine("left-[-1rem] bottom-[50%] w-[1px] h-[22rem] bg-white")} {/* Vertical line */}
                                            {generateLine("left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[3rem] bg-white")} {/* Additional vertical line */}
                                            {generateLine("left-[-2rem] top-[calc(50%+25rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                            {generateLine("left-[-2rem] bottom-[calc(50%+22rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                        </div>
                                        )}

                                        {/* Section for Semifinales */}
                                        {round.title === "Semifinales" && (
                                            <div>
                                            {generateLine("left-[-1rem] top-[62%] w-[1rem] h-[1px] bg-white")} {/* Horizontal line */}
                                            {generateLine("left-[-1rem] top-[50%] w-[1px] h-[52rem] bg-white")} {/* Vertical line */}
                                            {generateLine("left-[-1rem] bottom-[50%] w-[1px] h-[42rem] bg-white")} {/* Vertical line */}
                                            {generateLine("left-[-1rem] top-[calc(50%+3rem)] w-[1px] h-[3rem] bg-white")} {/* Additional vertical line */}
                                            {generateLine("left-[-2rem] top-[calc(50%+52rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                            {generateLine("left-[-2rem] bottom-[calc(50%+42rem)] w-[1rem] h-[1px] bg-white")} {/* New horizontal line */}
                                        </div>
                                        )}

                                        {/* Section for Final */}
                                        {round.title === "Final" && (
                                            <div>
                                                {generateLine("right-[-1rem] top/[62%] w/[1rem] h/[1px] bg-white")} {/* Horizontal line */}
                                                {generateLine("right-[-1rem] top/[50%] w/[1px] h/[10rem] bg-white")} {/* Vertical line */}
                                            </div>
                                        )}
                                        {/* Section for Semifinales (mirrored) */}
                                        {round.title === "Semifinales (mirrored) " && (
                                            <div>
                                                {generateLine("right-[-1rem] top/[62%] w/[1rem] h/[1px] bg-white")} {/* Horizontal line */}
                                                {generateLine("right-[-1rem] top/[50%] w/[1px] h/[52rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] bottom/[50%] w/[1px] h/[42rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] top/[calc(50%+3rem)] w/[1px] h/[3rem] bg-white")} {/* Additional vertical line */}
                                                {generateLine("right-[-2rem] top/[calc(50%+52rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                                {generateLine("right-[-2rem] bottom/[calc(50%+42rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                            </div>
                                        )}

                                        {/* Section for Cuartos de final (mirrored) */}
                                        {round.title === "Cuartos de final (mirrored)" && (
                                            <div>
                                                {generateLine("right-[-1rem] top/[62%] w/[1rem] h/[1px] bg-white")} {/* Horizontal line */}
                                                {generateLine("right-[-1rem] top/[50%] w/[1px] h/[25rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] bottom/[50%] w/[1px] h/[22rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] top/[calc(50%+3rem)] w/[1px] h/[3rem] bg-white")} {/* Additional vertical line */}
                                                {generateLine("right-[-2rem] top/[calc(50%+25rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                                {generateLine("right-[-2rem] bottom/[calc(50%+22rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                            </div>
                                        )}

                                        {/* Section for Ronda de 16 (mirrored) */}
                                        {round.title === "Ronda de 16 (mirrored)" && (
                                            <div>
                                                {generateLine("right-[-1rem] top/[62%] w/[1rem] h/[1px] bg-white")} {/* Horizontal line */}
                                                {generateLine("right-[-1rem] top/[50%] w/[1px] h/[13rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] bottom/[50%] w/[1px] h/[11rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] top/[calc(50%+3rem)] w/[1px] h/[3rem] bg-white")} {/* Additional vertical line */}
                                                {generateLine("right-[-2rem] top/[calc(50%+13rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                                {generateLine("right-[-2rem] bottom/[calc(50%+11rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                            </div>
                                        )}

                                        {/* Section for Ronda de 32 (mirrored) */}
                                        {round.title === "Ronda de 32 " && (
                                            <div>
                                                {generateLine("right-[-1rem] top/[62%] w/[1rem] h/[1px] bg-white")} {/* Horizontal line */}
                                                {generateLine("right-[-1rem] top/[50%] w/[1px] h/[10rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] bottom/[50%] w/[1px] h/[8rem] bg-white")} {/* Vertical line */}
                                                {generateLine("right-[-1rem] top/[calc(50%+3rem)] w/[1px] h/[3rem] bg-white")} {/* Additional vertical line */}
                                                {generateLine("right-[-2rem] top/[calc(50%+10rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                                {generateLine("right-[-2rem] bottom/[calc(50%+8rem)] w/[1rem] h/[1px] bg-white")} {/* New horizontal line */}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BracketDetalladoComponente;