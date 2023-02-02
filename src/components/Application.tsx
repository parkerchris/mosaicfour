import { signIn, useSession, signOut, getSession } from 'next-auth/react'



interface ApplicationProps {

}

const Application: React.FC<ApplicationProps> = () => {
    return (
        <>
            <div>Appplication... welcome to the inside!</div>
            <button onClick={() => signOut()}>Sign Out</button>
        </>
    )
}

export default Application