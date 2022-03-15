import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
// useEffect serve para disparar uma funcao quando alco acontecer na aplicacao.
//ex: uma variavel que mudou 
import "../styles/repositories.scss";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/unform/unform"
}
export function RepositoryList() {
    // o ideal e sempre comecar o valor do estado com uma variavel tipo da que vamos armazenar.
    // neste caso sera ARRAY
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/wemersonqueiroz/repos")
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);
    // nao esquecer o segundo parametro no useEffect, ou ele vai ficar em loop eterno.
    // tambem nao usar como 2nd parametro, aquilo que voce quer mudar 
    //ex: sempre que repository mudar, é pra mudar repository(2nd param), entao sempre vai ficar em loop.



    return (
        <section className="repository-list">
            <h1> Repository List</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}