
import ProgressLineComponent from "../components/progress_line_component/progress_line.component"
import LanguageExampleComponent from './components/language_example.component';
import ReduxExampleComponent from './components/redux_example.component';
import ReactQueryExampleComponent from './components/react_query_example.component';
import ReactHookFormExampleComponent from "./components/react_hook_form_example.component";

const ExampleComponent = () => {
    return (
        <>
            <ProgressLineComponent />
            <LanguageExampleComponent />
            <ReduxExampleComponent />
            <ReactQueryExampleComponent />
            <ReactHookFormExampleComponent />
        </>
    );
}

export default ExampleComponent;
