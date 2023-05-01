import React from 'react';
import {Fragment} from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';
import {Button} from '../components/button/Button';
import MUIPalette from '@react-buddy/palette-mui';

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
        </Category>
        <Category name="Components">
            <Component name="Button">
                <Variant name={'PRIMARY'} requiredParams={[]}>
                    <Button text={''} color={'red'} background={'blue'}>PRIMARY</Button>
                </Variant>
                <Variant name={'SECONDARY'} requiredParams={[]}>
                    <Button text={''} color={'blue'} background={'black'}>SECONDARY</Button>
                </Variant>
            </Component>
        </Category>
        <MUIPalette/>
    </Palette>
);

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    );
}