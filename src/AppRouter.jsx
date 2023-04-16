export function AppRouter(){
    return (
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventListPage />} />
            <Route path="/event-detail/:id" element={<EventDetailPage />} />
          </Routes>
        </BrowserRouter>
      );
}