import { NamedArrayMap } from '../../../util';
import { Array1D, Array2D, Array3D, Array4D } from '../../ndarray';
import { KernelInputConfig, KernelNode, TapeNodeInputGradientArrays } from '../tape_types';
export interface Slice1DNode extends KernelNode {
    inputAndArgs: Slice1DInputConfig;
    output: Array1D;
    gradient: (dy: Array1D, y: Array1D) => Slice1DGradientInputArrays;
}
export interface Slice1DInputConfig extends KernelInputConfig {
    inputs: Slice1DInputArrays;
    args: {
        begin: number;
        size: number;
    };
}
export interface Slice1DInputArrays extends NamedArrayMap {
    x: Array1D;
}
export interface Slice1DGradientInputArrays extends TapeNodeInputGradientArrays {
    x: () => Array1D;
}
export interface Slice2DNode extends KernelNode {
    inputAndArgs: Slice2DInputConfig;
    output: Array2D;
    gradient: (dy: Array2D, y: Array2D) => Slice2DGradientInputArrays;
}
export interface Slice2DInputConfig extends KernelInputConfig {
    inputs: Slice2DInputArrays;
    args: {
        begin: [number, number];
        size: [number, number];
    };
}
export interface Slice2DInputArrays extends NamedArrayMap {
    x: Array2D;
}
export interface Slice2DGradientInputArrays extends TapeNodeInputGradientArrays {
    x: () => Array2D;
}
export interface Slice3DNode extends KernelNode {
    inputAndArgs: Slice3DInputConfig;
    output: Array3D;
    gradient: (dy: Array3D, y: Array3D) => Slice3DGradientInputArrays;
}
export interface Slice3DInputConfig extends KernelInputConfig {
    inputs: Slice3DInputArrays;
    args: {
        begin: [number, number, number];
        size: [number, number, number];
    };
}
export interface Slice3DInputArrays extends NamedArrayMap {
    x: Array3D;
}
export interface Slice3DGradientInputArrays extends TapeNodeInputGradientArrays {
    x: () => Array3D;
}
export interface Slice4DNode extends KernelNode {
    inputAndArgs: Slice4DInputConfig;
    output: Array4D;
    gradient: (dy: Array4D, y: Array4D) => Slice4DGradientInputArrays;
}
export interface Slice4DInputConfig extends KernelInputConfig {
    inputs: Slice4DInputArrays;
    args: {
        begin: [number, number, number, number];
        size: [number, number, number, number];
    };
}
export interface Slice4DInputArrays extends NamedArrayMap {
    x: Array4D;
}
export interface Slice4DGradientInputArrays extends TapeNodeInputGradientArrays {
    x: () => Array4D;
}
