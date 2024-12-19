package battlezone_bazaar.BattleZone.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "discussion")
@Data
public class Discussion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;
}
