import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOut, Plus, User } from "lucide-react";

function UserMenuList() {
  return (
    <>
      <DropdownMenuItem>
        <Button variant="ghost" className="w-full justify-start">
          <User />
          帳戶資料
        </Button>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Button variant="ghost" className="w-full justify-start">
          <Plus />
          新增使用者
        </Button>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Button variant="ghost" className="w-full justify-start">
          <LogOut />
          登出
        </Button>
      </DropdownMenuItem>
    </>
  );
}

export default UserMenuList;
