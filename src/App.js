import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div className='max-w-screen-xl mx-auto bg-white'>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>

        </RouterProvider>
      </QueryClientProvider>

    </div>
  );
}

export default App;
