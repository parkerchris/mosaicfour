import { signIn, useSession, signOut, getSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import userOperations from '../graphql/operations/user'
import { CreateUserTypeData, CreateUserTypeVariables } from '../util/types'



interface AuthProps {
    session: Session | null;
    reloadSession: () => void
}



const Auth: React.FC<AuthProps> = ({
    session,
    reloadSession
}) => {

    const [ userType, setUserType ] = useState('')

    const [createUserType, { data, loading, error }] = useMutation<
        CreateUserTypeData,
        CreateUserTypeVariables
    >(userOperations.Mutations.createUserType)

    console.log('HERE IS DATA', data, loading, error)

    const onSubmit = async() => {
        try {
           await createUserType({ variables: { userType } })
        } catch(error) {
            console.log("onsubmit error", error)
        }
    }

    return (
        <>
            <div>
                {session ? (
                    <>
                        <p>create userType</p>
                        <input
                            placeholder="ener a user type"
                            value={userType}
                            onChange={(event) => setUserType(event.target.value)}
                        ></input>
                        <button onClick={onSubmit}>Save</button>
                    </>
                ) : (
                    <>
                        <p>MOSAIC</p>
                        <button onClick={() => signIn('google')}>Sign In with Google</button>
                    </>
                )
                }
            </div>
            
        </>
    )
}

export default Auth