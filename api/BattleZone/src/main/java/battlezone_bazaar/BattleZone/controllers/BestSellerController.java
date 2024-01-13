package battlezone_bazaar.BattleZone.controllers;

import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.services.BestSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bestSellers")
@RequiredArgsConstructor
public class BestSellerController {
    private final BestSellerService bestSellerService;

    @GetMapping("/get-all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<BestSeller> getAllBestSellers ()
    {
        return bestSellerService.getAllBestSellers();
    }

    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> createBestSeller(@RequestParam String name, @RequestParam String manufacturer)
    {
        if(this.bestSellerService.addBestSelleQueryExample(name, manufacturer)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Item not found!", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/remove")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> removeBestSeller(@RequestParam String name, @RequestParam String manufacturer,@RequestParam Integer month, @RequestParam Integer year ){
            if(this.bestSellerService.removeBestSeller(name,manufacturer,month, year)){
               return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>("Item not found!", HttpStatus.NOT_FOUND);
    }

}
