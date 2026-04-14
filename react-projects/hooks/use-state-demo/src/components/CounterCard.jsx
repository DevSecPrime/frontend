import React, { useState } from 'react';

const CounterCard = () => {
    const [count, setCount] = useState(0);

    function increment() {
        console.log("increment called")
        setCount(count + 1);
    }

    function decrement() {
        console.log("decrement called")
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-md w-full">
                {/* Counter Display */}
                <div className="text-center mb-8">
                    <div className="text-6xl md:text-8xl font-bold text-white mb-2 font-mono tracking-tight">
                        {count}
                    </div>
                    <p className="text-white/70 text-lg">Current Count</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={decrement}
                        className="group relative bg-red-500/20 hover:bg-red-500/30 border-2 border-red-400/50 hover:border-red-400 text-white font-bold py-4 px-6 rounded-2xl text-2xl md:text-3xl transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                        disabled={count === 0}
                    >
                        <span className="relative z-10">−</span>
                        <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl group-hover:bg-red-500/30 transition-all duration-200"></div>
                    </button>

                    <button
                        onClick={increment}
                        className="group relative bg-emerald-500/20 hover:bg-emerald-500/30 border-2 border-emerald-400/50 hover:border-emerald-400 text-white font-bold py-4 px-6 rounded-2xl text-2xl md:text-3xl transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
                    >
                        <span className="relative z-10">+</span>
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl group-hover:bg-emerald-500/30 transition-all duration-200"></div>
                    </button>
                </div>

                {/* Reset Button */}
                {count > 0 && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setCount(0)}
                            className="text-white/60 hover:text-white text-sm underline underline-offset-2 transition-colors duration-200"
                        >
                            Reset to 0
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CounterCard;