function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  
  padLeft("Hello world", 4); // returns "    Hello world"


  type Easing = "ease-in" | "ease-out" | "ease-in-out";

  function test(x : Easing){

  }

  test("ease-out");

  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
  interface ArtworksData {
    artworks: { title: string }[];
  }
  
  interface ArtistsData {
    artists: { name: string }[];
  }
  
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;
  
  const handleArtistsResponse = (response: ArtworksResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }
}