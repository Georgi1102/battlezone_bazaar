package battlezone_bazaar.BattleZone.controllers;

import battlezone_bazaar.BattleZone.models.Discussion;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.services.DiscussionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/discussions")
@RequiredArgsConstructor
public class DiscussionController {
    private final DiscussionService discussionService;

    @GetMapping("/get-all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Discussion> getProducts() {
        return discussionService.getAllDiscussions();
    }

}
