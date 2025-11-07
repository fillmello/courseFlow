type HeadingProps = {
    children: React.ReactNode;
}

export function Heading(props: HeadingProps){
    const { children } = props; // ====== const children = props.children

    console.log(props);
    return <h1>{children}</h1>;
}

