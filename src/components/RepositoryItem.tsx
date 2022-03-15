interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <p>Forms in React</p>
            <a href={props.repository.html_url}>
                Access Repository
            </a>
        </li>
    );
}