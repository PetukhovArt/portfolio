import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Skills} from '../components/skills/Skills';
import App from '../App';
import {Button} from '../components/button/Button';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Skills">
                <Skills/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Button">
                <Button text={''}/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;