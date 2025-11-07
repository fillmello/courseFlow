type HeadingProps = {
    children: string;
}

export function Heading(props: HeadingProps){
    console.log(props);
    return <h1>{props.children}</h1>;
}

