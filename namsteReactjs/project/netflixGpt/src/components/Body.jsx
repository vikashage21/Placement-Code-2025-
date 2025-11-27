            import React, { useEffect } from "react";
            import { createBrowserRouter, useNavigate } from "react-router-dom";
            import { RouterProvider } from "react-router-dom";
            import Login from "./Login";
            import Browse from "./Browse";
            import { onAuthStateChanged } from "firebase/auth";
            import { auth } from "../utils/firebase";
            import { useDispatch } from "react-redux";
            import { addUser, removeUser } from "../utils/appSlice";

            const Body = () => {
            //  setup the router here

            //   redux dispatch
            const dispatch = useDispatch();
         
            const appRouter = createBrowserRouter([
                {
                path: "/",
                element: <Login />,
                },
                {
                path: "/browse",
                element: <Browse />,
                },
            ]);

            // get the currently signed in user details and add to redux store
            useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log(user);

                    const { email, uid, displayName , photoURL} = user;
                    //   we have to save the data inside the redux store

                    dispatch(
                    addUser({
                        email,
                        uid,
                        displayName,
                        photoURL
                    })
                    );
                    // ...
                } else {
                    // User is signed out

                    dispatch(removeUser())
                  
                }
                });
            }, []);

            return (
                <div>
                <RouterProvider router={appRouter} />
                </div>
            ); 
            };

            export default Body;
