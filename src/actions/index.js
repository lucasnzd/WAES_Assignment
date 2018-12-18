import colorActions from './colorActions';
import filterActions from './filterActions';
import highlightActions from './highlightActions';

export default {
    ...highlightActions,
    ...colorActions,
    ...filterActions
};
