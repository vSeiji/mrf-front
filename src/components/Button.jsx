import Link from "next/link"

export default function Button({children, variant="primary", type="link", ...props}) {

    const styles ={
        primary: "flex items-center gap-2 hover:bg-amber-600 bg-amber-500 py-3 px-5 rounded-full",
        secondary: "flex items-center gap-2 hover:bg-rose-400 bg-rose-500 py-3 px-5 rounded-full"
    }

    const classVariante=styles[variant]

    return(
        <>
            {
                type === "link" ?
                <Link href="#" {...props} className={classVariante}>{children}</Link>
                :
                <button {...props} className={classVariante}>{children}</button>
            }
            
        </>
    )
}