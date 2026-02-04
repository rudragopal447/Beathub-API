# BeatHub Design Document

## 1. Data Relationships
- Artist is the parent entity.
- Album references Artist.
- Song references both Album and Artist.
- User is an independent entity.
- Playlist references User and stores an array of Song references.

## 2. Design Decisions (Defend Your Code)

**Q: Why did you reference Songs in the Playlist instead of embedding them?**  
**A:** Songs are referenced to avoid data duplication. If a song’s details change, the update is reflected across all playlists automatically. Embedding would require updating multiple playlist documents.

**Q: Why did you reference the Artist in the Song model?**  
**A:** Referencing the artist in the song allows direct queries such as retrieving all songs by a specific artist without depending on album lookups, improving query efficiency.
