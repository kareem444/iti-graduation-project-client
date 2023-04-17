import React from 'react';
import { RepGetOneUser, RepoCreateUser, RepoGetAllUsers } from '../../repositories/user.repo';

const ReactQueryExampleComponent = () => {
    // const { data: usersQuey, isLoading, isError, error } = RepoGetAllUsers()
    const { data: usersQuey, isLoading, isError, error } = RepGetOneUser("643b3e6d2219246eac861c12")
    console.log("usersQuey", usersQuey);

    const { mutate, isError: IsMutateError, error: mutateError, isLoading: isMutateLoading } = RepoCreateUser()
    return (
        <div>
            {isLoading && <div>Loading...</div>}

            {isError && <div>{error.message}</div>}

            {/* {usersQuey?.map(v =>
                <div key={v["_id"]}>{v.name}</div>
            )} */}

            {usersQuey && <div>{usersQuey.name}</div>}

            <br />
            <button disabled={isMutateLoading} onClick={() => mutate({
                email: 'morpheus@gmail.com',
                message: 'leader',
                name: 'morpheus',
            })}>{isMutateLoading ? `Loading...` : `Add to payments`}</button>
            
            {IsMutateError && <div>{mutateError.message}</div>}
        </div>
    );
}

export default ReactQueryExampleComponent;
