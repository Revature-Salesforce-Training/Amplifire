import { LightningElement } from 'lwc';

export default class TreeGridBasic extends LightningElement {
    // definition of columns for the tree grid
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;

    // data provided to the tree grid
    gridData = EXAMPLES_DATA_BASIC;
}