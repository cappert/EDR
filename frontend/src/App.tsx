import React, {ReactNode} from 'react';
import {EDR} from "./EDR";
import "./index.css"
import {Flowbite, useThemeMode} from "flowbite-react";
import {StringParam, useQueryParams} from "use-query-params";
import {ServerSelect} from "./SelectMenu/ServerSelect";
import {PostSelect} from "./SelectMenu/PostSelect";

function App() {
    const [{serverCode, post, betaToken}] = useQueryParams({
        betaToken: StringParam,
        serverCode: StringParam,
        post: StringParam
    });

    const wrap = (children: ReactNode) => (
        <Flowbite>
                <div className="min-h-screen dark:bg-slate-800 text-black dark:text-white">
                    {children}
                </div>
        </Flowbite>
    );

    if (!betaToken)
        return <div className="text-center mt-8">Désolé, l'EDR n'est pas encore ouvert a tous</div>

    return wrap((function() {
        if (!serverCode)
            return <ServerSelect />
        if (serverCode && !post)
            return <PostSelect />
        if (serverCode && post)
            return <EDR serverCode={serverCode} post={post} />
        return <>Bien tenté !</>
    }()));
}

export default App;
