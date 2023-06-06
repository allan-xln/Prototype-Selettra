import React from 'react';
import { RecipeCard } from './RecipeCard';
import { TabPanel } from './TabPanel'

export default function Home() {
    return (
        <>
            <TabPanel />
            <RecipeCard />
        </>
    );
}
