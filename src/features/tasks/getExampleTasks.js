export const getExampleTasks = async () => {
    const response = await fetch("/tasklist-react/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};