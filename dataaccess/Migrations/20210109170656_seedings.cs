using Microsoft.EntityFrameworkCore.Migrations;

namespace dataaccess.Migrations
{
    public partial class seedings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PhoneBookEntries_PhoneBooks_PhoneBooksId",
                table: "PhoneBookEntries");

            migrationBuilder.AlterColumn<int>(
                name: "PhoneBooksId",
                table: "PhoneBookEntries",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "PhoneBookEntries",
                columns: new[] { "Id", "Name", "PhoneBooksId", "PhoneNumber" },
                values: new object[] { 1, "Tom", 1, "011234678" });

            migrationBuilder.AddForeignKey(
                name: "FK_PhoneBookEntries_PhoneBooks_PhoneBooksId",
                table: "PhoneBookEntries",
                column: "PhoneBooksId",
                principalTable: "PhoneBooks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PhoneBookEntries_PhoneBooks_PhoneBooksId",
                table: "PhoneBookEntries");

            migrationBuilder.DeleteData(
                table: "PhoneBookEntries",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<int>(
                name: "PhoneBooksId",
                table: "PhoneBookEntries",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_PhoneBookEntries_PhoneBooks_PhoneBooksId",
                table: "PhoneBookEntries",
                column: "PhoneBooksId",
                principalTable: "PhoneBooks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
