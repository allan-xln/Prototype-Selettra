import React from 'react';
import { RecipeCard } from './RecipeCard';
import { SimpleMap } from './SimpleMap'

export default function Home() {
    return (
        <>
            <SimpleMap />
            <RecipeCard />
        </>
    );
}
